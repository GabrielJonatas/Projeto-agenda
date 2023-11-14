import validator from "validator";

export default class Login {
    constructor(formClass,type,funcao='') {
        this.form = document.querySelector(formClass);
        this.tipo = type;
        this.funcao = funcao;
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
        const doc = document.querySelector('.loginInvalido');
        doc.innerHTML = '';    
        const el= e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;

        if (this.funcao == 'cadastro') {
            const nameInput = el.querySelector('input[name="name"]');

            if(!validator.isAlpha(nameInput.value)) {
                const p = this.criaEstilizadoP(`Nome de ${this.tipo} Inválido!`);
                doc.appendChild(p);
                doc.style.backgroundColor = '#EBB5B5';
                error = true;            
            }
        }
        
        if (!validator.isEmail(emailInput.value)) {
            const p = this.criaEstilizadoP(`Email de ${this.tipo} Inválido!`);
            doc.appendChild(p);
            doc.style.backgroundColor = '#EBB5B5';
            error = true;   
        }

        if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            const variavel = this.tipo;
            const p = this.criaEstilizadoP(`Senha de ${this.tipo} precisa ter entre 3 e 50 caracteres`);
            doc.appendChild(p);
            doc.style.backgroundColor = '#EBB5B5';
            error = true;
        }

        if(!error) el.submit();
    }
}