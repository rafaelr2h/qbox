const estados = [

    { sigla: "BA", nome: "Bahia" },
    { sigla: "DF", nome: "Distrito Federal" },
    { sigla: "ES", nome: "Espírito Santo" },
    { sigla: "GO", nome: "Goiás" },
    { sigla: "MG", nome: "Minas Gerais" },
    { sigla: "PR", nome: "Paraná" },
    { sigla: "RJ", nome: "Rio de Janeiro" },
    { sigla: "RS", nome: "Rio Grande do Sul" },
    { sigla: "SC", nome: "Santa Catarina" },
    { sigla: "SP", nome: "São Paulo" }
];

const container = document.getElementById("checkbox-container");

    estados.forEach(estado => {
        const div = document.createElement("div");
        div.className = "form-check form-check-inline";

        const input = document.createElement("input");
        input.type = "checkbox";
        input.className = "form-check-input";
        input.id = `checkbox-${estado.sigla}`;
        input.value = estado.sigla;

        const label = document.createElement("label");
        label.className = "form-check-label";
        label.htmlFor = `checkbox-${estado.sigla}`;
        label.innerText = estado.sigla;

        div.appendChild(input);
        div.appendChild(label);
        container.appendChild(div);
    });

    document.addEventListener("DOMContentLoaded", () => {
        const submitButton = document.getElementById("submitButton");
        const cardForm = document.querySelector(".card-form");
    
        submitButton.addEventListener("click", (event) => {
            // Impedir o envio do formulário real (apenas para simulação)
            event.preventDefault();
    
            // Substituir o conteúdo da card-form por uma mensagem de confirmação
            cardForm.innerHTML = `
                <div class="text-center p-4">
                    <h3 class="text-success">Formulário enviado com sucesso!</h3>
                    <p>Em breve entraremos em contato.</p>
                </div>
            `;
        });
    });
    