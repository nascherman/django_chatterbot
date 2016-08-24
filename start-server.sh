#put Ip here
PUBLIC_IP='192.168.2.16:8000'
export PUBLIC_IP
python example/manage.py runserver $PUBLIC_IP