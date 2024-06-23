

from django.urls import path
from . import consumers

websocket_urlpatterns = [
    path("<str:groupName>/", consumers.MySyncConsumer.as_asgi()),
]





# class A:
#     ace = 1  # Class variable

#     def s(self):
#         A.ace = 10  # Modify class variable using the class name
#         self.ace = 15  # Modify instance variable (this will create an instance variable)

#     def s2(self):
#         print(self.ace)  # Access instance variable (if exists) otherwise class variable

# a1 = A()
# a1.s2()  # Output: 1 (class variable)
# a1.s()   # Modify class variable to 10 and instance variable to 15
# a1.s2()  # Output: 15 (instance variable takes precedence)
# print(A.ace)  # Output: 10 (class variable)
