from django.contrib import admin
from .models import Test, Subject, MCQ, StudentProgress, StudentTest,EnrollCourse,Material

# Inline for MCQs in Subject
class MCQInline(admin.TabularInline):
    model = MCQ
    extra = 1  

# Inline for Subjects in Test
class SubjectInline(admin.TabularInline):
    model = Subject
    extra = 1

@admin.register(Material)
class MaterialAdmin(admin.ModelAdmin):
    list_display = ('name', 'subject', 'pdf_link')
    search_fields = ('name', 'subject__name')

    def pdf_link(self, obj):
        if obj.pdf:
            return f"<a href='{obj.pdf.url}' target='_blank'>View PDF</a>"
        return "No file"
    pdf_link.allow_tags = True
    pdf_link.short_description = "PDF File"  

class TestAdmin(admin.ModelAdmin):
    inlines = [SubjectInline]
    list_display = ['name', 'description', 'icon', 'tag']  

class SubjectAdmin(admin.ModelAdmin):
    inlines = [MCQInline]
    list_display = ['name', 'test','icon']  

class StudentTestAdmin(admin.ModelAdmin):
    list_display = ['student', 'test', 'date_taken', 'score']
    list_filter = ['test']
    search_fields = ['student__username', 'test__name']

class StudentProgressAdmin(admin.ModelAdmin):
    list_display = ['student', 'subject', 'progress']
    list_filter = ['subject']
    search_fields = ['student__username', 'subject__name']

class EnrollCourseAdmin(admin.ModelAdmin):
    list_display = ('user', 'test', 'created_at','progress')
    search_fields = ('user__username', 'test__name')
    list_filter = ('created_at',)

# Registering the models with the admin
admin.site.register(EnrollCourse, EnrollCourseAdmin)
admin.site.register(Test, TestAdmin)
admin.site.register(Subject, SubjectAdmin)
admin.site.register(MCQ)
admin.site.register(StudentProgress, StudentProgressAdmin)
admin.site.register(StudentTest, StudentTestAdmin)
