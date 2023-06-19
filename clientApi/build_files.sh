echo "BUILD START"
python3.9 pip install pipwin
python3.9 pipwin install psycopg2==2.9.6
python3.9 -m pip install -r requirements.txt
python3.9 manage.py collectstactic --noinput --clear
python3.9 manage.py makemigrations --noinput
python3.9 manage.py migrate --noinput
echo "BUILD END"