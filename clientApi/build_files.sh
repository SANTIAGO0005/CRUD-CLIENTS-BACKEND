echo "BUILD START"
winget install postqresql
python3.9 pip install pipwin
python3.9 pipwin install psycopg2==2.9.6
python3.9 pip install asgiref==3.4.1
python3.9 pip install certifi==2022.6.15
python3.9 pip install charset-normalizer==2.1.0
python3.9 pip install coreapi==2.3.3
python3.9 pip install coreschema==0.0.4
python3.9 pip install decouple==0.0.7
python3.9 pip install dj-database-url==1.2.0
python3.9 pip install dj-static==0.0.6
python3.9 pip install Django==4.0.6
python3.9 pip install django-cors-headers==4.1.0
python3.9 pip install django-simple-history==3.1.1
python3.9 pip install djangorestframework==3.13.1
python3.9 pip install drf-yasg==1.21.3
python3.9 pip install gunicorn==20.1.0
python3.9 pip install idna==3.3
python3.9 pip install inflection==0.5.1
python3.9 pip install itypes==1.2.0
python3.9 pip install Jinja2==3.1.2
python3.9 pip install MarkupSafe==2.1.1
python3.9 pip install mysql-connector-python==8.0.32
python3.9 pip install packaging==21.3
python3.9 pip install Pillow==8.2.0
python3.9 pip install postgres==4.0
python3.9 pip install psycopg2-pool==1.1
python3.9 pip install pyparsing==3.0.9
python3.9 pip install python-dotenv==0.21.1
python3.9 pip install pytz==2021.1
python3.9 pip install requests==2.28.1
python3.9 pip install ruamel.yaml==0.17.21
python3.9 pip install ruamel.yaml.clib==0.2.6
python3.9 pip install sqlparse==0.4.1
python3.9 pip install static3==0.7.0
python3.9 pip install typing-extensions==3.10.0.0
python3.9 pip install tzdata==2022.1
python3.9 pip install Unipath==1.0
python3.9 pip install uritemplate==4.1.1
python3.9 pip install urllib3==1.26.11
python3.9 pip install whitenoise==6.3.0
python3.9 manage.py collectstactic --noinput --clear
python3.9 manage.py makemigrations --noinput
python3.9 manage.py migrate --noinput
echo "BUILD END"