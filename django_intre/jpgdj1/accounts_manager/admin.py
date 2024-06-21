# your_app/admin.py
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext as _
from .models import CustomUser
from .import models

# class UserAdmin(BaseUserAdmin):
#     # The fields to be used in displaying the User model.
#     list_display = ('email', 'first_name', 'last_name', 'mobile_number', 'is_staff')
#     list_filter = ('is_staff', 'is_superuser', 'is_active', 'groups')
#     search_fields = ('email', 'first_name', 'last_name', 'mobile_number')
#     ordering = ('email',)

#     fieldsets = (
#         (None, {'fields': ('email', 'password')}),
#         (_('Personal info'), {'fields': ('first_name', 'last_name', 'mobile_number')}),
#         (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
#         (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
#     )

#     add_fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': ('email', 'mobile_number', 'password1', 'password2'),
#         }),
#     )

#     filter_horizontal = ('groups', 'user_permissions',)

#admin.site.register(CustomUser, UserAdmin)
admin.site.register(CustomUser)
admin.site.register(models.PasswordReset)
admin.site.register(models.AccountActivation)
