# FROM python:3.10.10-slim-buster

# WORKDIR /app

# COPY requirements.txt requirements.txt

# RUN pip3 install -r requirements.txt

# COPY . .

# EXPOSE 8000

# CMD python manage.py runserver





# Use an official Python runtime as a parent image
FROM python:3.10.10-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container at /app
COPY requirements.txt /app/

# Install any dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the current directory contents into the container at /app
COPY . /app/

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Define environment variable for Django settings module
#ENV DJANGO_SETTINGS_MODULE=your_project.settings
ENV DJANGO_SETTINGS_MODULE=jpgdj1.settings

# Run the Django application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
