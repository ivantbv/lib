export class DomManipulation {
    constructor() {
        this.modal = document.getElementById("myModal");
        this.modalBtn = document.getElementById("myBtn");
        this.modalSpan = document.getElementsByClassName("close")[0];
    }

    openModal() {
        this.modalBtn.addEventListener('click', () => {
            this.modal.style.display = "block";
        })

        this.modalSpan.addEventListener('click', () => {
            this.modal.style.display = "none";
        })

        //When user clicks anywhere outside the modal, close it
        window.addEventListener('click', (e) => {
            if (e.target == this.modal) {
                this.modal.style.display = "none";
            }
        })
    }

}