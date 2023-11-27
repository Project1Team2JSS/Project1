class validationModal {
  constructor({ titleText, messageText, confirmText, cancelText }) {
    this.titleText = titleText;
    this.messageText = messageText;
    this.confirmText = confirmText;
    this.cancelText = cancelText;
  }
  createAndOpen(onConfirm, onCancel) {
    this.modalElem = document.createElement("div");
    this.modalElem.classList.add("modal");
    setTimeout(() => {
      this.modalElem.classList.add("open");
    }, 400);

    const modalContentElem = document.createElement("div");
    modalContentElem.classList.add("content");

    this.modalElem.appendChild(modalContentElem);

    // Heading
    const titleTextElem = document.createElement("p");
    titleTextElem.classList.add("titleText");
    titleTextElem.textContent = this.titleText;

    modalContentElem.appendChild(titleTextElem);

    // Message
    const messageTextElem = document.createElement("p");
    messageTextElem.classList.add("messageText");
    messageTextElem.textContent = this.messageText;

    modalContentElem.appendChild(messageTextElem);

    // Buttons
    if (this.cancelText){

        const cancelButtonTextElem = document.createElement("button");
        cancelButtonTextElem.classList.add("cancelButtonText");
        cancelButtonTextElem.textContent = this.cancelText;
        
        cancelButtonTextElem.addEventListener("click", () => {
            onCancel("Canceled");
            this.close();
        });
        
        modalContentElem.appendChild(cancelButtonTextElem);
    }

    const confirmButtonTextElem = document.createElement("button");
    confirmButtonTextElem.classList.add("confirmButtonText");
    confirmButtonTextElem.textContent = this.confirmText;

    confirmButtonTextElem.addEventListener("click", () => {
      onConfirm("Success");
      this.close();
    });

    modalContentElem.appendChild(confirmButtonTextElem);

    document.body.appendChild(this.modalElem);
  }

  open() {
    return new Promise((resolve, reject) => {
      this.createAndOpen(resolve, reject);
    });
  }

  close(){
    this.modalElem.classList.remove('open');
    setTimeout(() => {
        document.body.removeChild(this.modalElem)
    }, 400);
  }
}
