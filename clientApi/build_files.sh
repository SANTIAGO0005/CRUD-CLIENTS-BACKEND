echo "BUILD START"
python3.9 manage.py collectstactic --noinput --clear
python3.9 manage.py makemigrations --noinput
python3.9 manage.py migrate --noinput
echo "BUILD END"