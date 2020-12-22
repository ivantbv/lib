export class DomManipulation {
    constructor() {
        this.modal = document.getElementById("myModal");
        this.modalBtn = document.getElementById("myBtn");
        this.modalSpan = document.getElementsByClassName("close")[0];
    }

    openModal() {
        this.modalBtn.addEventListener('click', () => {
            this.modal.style.display = "block";

            if (document.querySelector('#title').value === '') {
                document.querySelector('.add-book').disabled = true;
            }
        })

        this.modalSpan.addEventListener('click', () => {
            this.modal.style.display = "none";
        })

        window.addEventListener('click', (e) => {
            if (e.target == this.modal) {
                this.modal.style.display = "none";
            }
        })
    }

    closeModal() {
        this.modal.style.display = 'none';
    }
}