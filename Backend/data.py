import os
import django

# Setup Django environment
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")
django.setup()

from src.course.models import Test, Subject, Material, MCQ

# Data
TESTS = ["MDCAT", "ETEA"]
SUBJECTS = ["Biology", "Chemistry", "Physics", "English"]

# MCQs bank (100 per subject)
MCQ_BANK = {
    "Biology": [
        ("Which organelle is responsible for energy production?", "Mitochondria", "Ribosome", "Golgi apparatus", "Nucleus", "A"),
        ("What is the basic unit of life?", "Cell", "Atom", "Organ", "Tissue", "A"),
        ("Which enzyme breaks down starch?", "Amylase", "Lipase", "Pepsin", "Trypsin", "A"),
        ("Blood is a type of?", "Connective tissue", "Muscle tissue", "Epithelial tissue", "Nervous tissue", "A"),
        ("Which vitamin is synthesized in skin?", "Vitamin D", "Vitamin A", "Vitamin B12", "Vitamin C", "A"),
        ("What is the function of ribosomes?", "Protein synthesis", "Lipid storage", "Energy production", "DNA replication", "A"),
        ("The functional unit of kidney is?", "Nephron", "Neuron", "Alveolus", "Hepatocyte", "A"),
        ("The longest bone in human body?", "Femur", "Humerus", "Tibia", "Fibula", "A"),
        ("Which gas is absorbed by plants during photosynthesis?", "Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen", "A"),
        ("Which hormone regulates blood sugar?", "Insulin", "Adrenaline", "Glucagon", "Thyroxine", "A"),
        # 90 more Biology MCQs (repeating pattern for brevity)
    ] * 10,

    "Chemistry": [
        ("Atomic number of Carbon?", "6", "8", "12", "14", "A"),
        ("What type of bond is in NaCl?", "Ionic", "Covalent", "Metallic", "Hydrogen", "A"),
        ("Empirical formula of glucose?", "CH2O", "C6H12O6", "C2H4O2", "C3H6O3", "A"),
        ("Which is a strong acid?", "HCl", "CH3COOH", "NH4OH", "NaOH", "A"),
        ("Which of the following is an alkene?", "Ethene", "Ethane", "Ethyne", "Benzene", "A"),
        ("Unit of rate constant for first-order reaction?", "s^-1", "mol^-1 s^-1", "mol L^-1", "L mol^-1", "A"),
        ("pH of pure water is?", "7", "0", "1", "14", "A"),
        ("Avogadro's number is?", "6.022x10^23", "1.602x10^-19", "3.00x10^8", "9.81", "A"),
        ("Formula of Sodium Carbonate?", "Na2CO3", "NaHCO3", "NaCl", "NaOH", "A"),
        ("Oxidation is defined as?", "Loss of electrons", "Gain of electrons", "Gain of protons", "Loss of neutrons", "A"),
        # 90 more Chemistry MCQs
    ] * 10,

    "Physics": [
        ("SI unit of force?", "Newton", "Joule", "Watt", "Pascal", "A"),
        ("First law of motion is also called?", "Law of inertia", "Law of energy", "Law of momentum", "Law of gravitation", "A"),
        ("Work is equal to?", "Force x displacement", "Mass x acceleration", "Energy x time", "Power x time", "A"),
        ("Speed of light is?", "3x10^8 m/s", "1x10^8 m/s", "2x10^8 m/s", "3x10^6 m/s", "A"),
        ("Which quantity is scalar?", "Speed", "Velocity", "Displacement", "Force", "A"),
        ("Gravitational acceleration on Earth?", "9.8 m/s²", "10 m/s²", "8.9 m/s²", "7.5 m/s²", "A"),
        ("Unit of power?", "Watt", "Joule", "Newton", "Pascal", "A"),
        ("Kinetic energy depends on?", "Mass and velocity", "Force and mass", "Time and displacement", "Speed and power", "A"),
        ("Ohm's law formula?", "V = IR", "P = IV", "F = ma", "E = mc²", "A"),
        ("Which instrument measures electric current?", "Ammeter", "Voltmeter", "Thermometer", "Barometer", "A"),
        # 90 more Physics MCQs
    ] * 10,

    "English": [
        ("Choose the correct preposition: She is fond ___ music.", "of", "in", "at", "for", "A"),
        ("Choose the correct article: He is ___ honest man.", "an", "a", "the", "none", "A"),
        ("Antonym of 'brave'?", "Coward", "Strong", "Gentle", "Proud", "A"),
        ("Which sentence is correct?", "They have gone to school.", "They has gone to school.", "They gone to school.", "They goes to school.", "A"),
        ("Find the error: He don't like apples.", "don't → doesn't", "like → likes", "He → Him", "No error", "A"),
        ("Choose the correct form: She ____ playing.", "is", "are", "am", "be", "A"),
        ("Synonym of 'abandon'?", "Leave", "Arrive", "Destroy", "Build", "A"),
        ("Choose the right spelling:", "Necessary", "Necassary", "Neccessary", "Necesary", "A"),
        ("Which is a noun?", "Book", "Quickly", "Run", "Blue", "A"),
        ("Identify the adjective: The sky is blue.", "blue", "sky", "is", "the", "A"),
        # 90 more English MCQs
    ] * 10
}

# Helpers
def create_mcqs(subject):
    questions = MCQ_BANK.get(subject.name, [])
    for q in questions[:100]:
        MCQ.objects.create(
            subject=subject,
            question=q[0],
            option_a=q[1],
            option_b=q[2],
            option_c=q[3],
            option_d=q[4],
            correct_option=q[5]
        )

def create_materials(subject):
    for i in range(10):
        Material.objects.create(
            subject=subject,
            name=f"Material {i+1} for {subject.name}",
            pdf="materials/pdfs/sample.pdf"
        )

def populate():
    for test_name in TESTS:
        test = Test.objects.create(name=test_name, description=f"{test_name} Description")
        print(f"Created Test: {test.name}")

        for subj_name in SUBJECTS:
            subject = Subject.objects.create(test=test, name=subj_name)
            print(f"  Added Subject: {subject.name} to {test.name}")

            create_materials(subject)
            create_mcqs(subject)

if __name__ == "__main__":
    populate()
    print("Data population completed!")
