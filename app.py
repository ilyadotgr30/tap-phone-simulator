from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/menu')
def menu():
    return render_template('menu.html')

@app.route('/menu/service-menu')
def service_menu():
    return render_template('service-menu.html')

@app.route('/menu/phone-book')
def phone_book():
    return render_template('phone-book.html')

@app.route('/menu/calls')
def calls():
    return render_template('calls.html')

@app.route('/menu/work-with-information')
def work_with_information():
    return render_template('work-with-information.html')

@app.route('/menu/service')
def service():
    return render_template('service.html')

@app.route('/menu/network-selection')
def network_selection():
    return render_template('network-selection.html')

@app.route('/menu/service-menu/settings')
def settings():
    return render_template('settings.html')

@app.route('/menu/service-menu/control')
def control():
    return render_template('control.html')

@app.route('/menu/service-menu/work-with-information')
def service_work_with_information():
    return render_template('service-work-with-information.html')

@app.route('/menu/service-menu/software-check')
def software_check():
    return render_template('software-check.html')

@app.route('/menu/service-menu/CKH')
def ckh():
    return render_template('CKH.html')

@app.route('/menu/service-menu/change-pin')
def change_pin():
    return render_template('change-pin.html')



if __name__ == '__main__':
    app.run(debug=True)
