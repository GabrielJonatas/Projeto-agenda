import validator from "validator";

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }
    
    init() {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    criaEstilizadoP(msg) {
        const p = document.createElement('p');
        p.innerHTML = msg;
        p.style.color = 'black';
        p.style.backgroundColor = '#EBB5B5';
        p.style.borderRadius = '5px';
        p.style.padding = "5px";
        p.style.paddingLeft = "8px";
        return p;
    }

    validate(e) {
        const doc = document.querySelector('.contatoInvalido');
        doc.innerHTML = '';    
        const el= e.target;
        const nameInput = el.querySelector('input[name="nome"]');
        const surnameInput = el.querySelector('input[name="sobrenome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const cellphoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        if (!validator.isAlpha(nameInput.value)) {
            const p = this.criaEstilizadoP(`Digite um nome valido somente com letras minusculas e maiusculas`);
            doc.appendChild(p);
            doc.style.backgroundColor = '#EBB5B5';
            error = true;
        }
        
        if (!validator.isAlpha(surnameInput.value) && surnameInput.value != '') {
            const p = this.criaEstilizadoP(`Digite um sobrenome valido somente com letras minusculas e maiusculas`);
            doc.appendChild(p);
            doc.style.backgroundColor = '#EBB5B5';
            error = true;
        } 

        if (emailInput.value != '') {
            if (!validator.isEmail(emailInput.value)) {
                const p = this.criaEstilizadoP(`Email inválido!`);
                doc.appendChild(p);
                doc.style.backgroundColor = '#EBB5B5';
                error = true;
            }
        }        

        if ( cellphoneInput.value != '' ) {
            if (!validator.isNumeric(cellphoneInput.value)) {
                const p = this.criaEstilizadoP(`Digite somente números!`);
                doc.appendChild(p);
                doc.style.backgroundColor = '#EBB5B5';
                error = true;
            }

            if (cellphoneInput.value.length < 10 || cellphoneInput.value.length > 11) {
                const p = this.criaEstilizadoP(`Número de telefone inválido!`);
                doc.appendChild(p);
                doc.style.backgroundColor = '#EBB5B5';
                error = true;
            }
        }

        if (emailInput.value == '' && cellphoneInput.value == '' ) {
            const p = this.criaEstilizadoP(`Preencha com email ou numero de telefone!`);
            doc.appendChild(p);
            doc.style.backgroundColor = '#EBB5B5';
            error = true;   
        }

        if(!error) el.submit();
    }
}