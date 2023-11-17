function contactInfo() {
    const containerContact = document.createElement('div');
    containerContact.style.cssText = 'display: flex; flex-direction: column; height: 100%; align-items: center; font-size: 3rem; margin: 0 0 0 0; justify-content: center; position: relative; max-height: 75%; background-image: linear-gradient(45deg, lightblue, white); gap: 1vh';
    containerContact.innerHTML = `
        <div class="contact-card">
            <div class="contact-header">Contact Us</div>
            <div class="contact-card-left">
                <h4 style="margin: 0; padding: 0;">The Store</h4>
                <ul style="list-style: none; padding: 0; margin: 0 0 0 20px;">
                    <li>
                        Everyone Present
                    </li>
                    <li>
                        555-555-5556
                    </li>
                    <li>
                        TheGreatTaormina@@notFake.com
                    </li>
                </ul>
            </div>
            <div class="contact-card-right"></div>
        </div>

        <div class="contact-card">
            <div class="contact-header">Staff</div>
            <div class="contact-card-left">
                <h4 style="margin: 0; padding: 0;">Ezio Auditore</h4>
                <ul style="list-style: none; padding: 0; margin: 0 0 0 20px;">
                    <li>
                        Owner and Manager
                    </li>
                    <li>
                        555-555-5555
                    </li>
                    <li>
                        EzioAuditoreEmail@@notFake.com
                    </li>
                </ul>
            </div>
            <div class="contact-card-right"></div>
        </div>`;
    return containerContact;
}

export default contactInfo;