from django.shortcuts import render

# Create your views here.


from django.shortcuts import render

# Create your views here.
def index(request,group_name):
    return render(request, 'index.html',{"group_name":group_name})