const form = document.getElementById("budgetForm");
const success = document.getElementById("success");

const whatsappNumber = "5562992104211";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const instagram = document.getElementById("instagram").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  const tipos = [...document.querySelectorAll('input[name="tipo"]:checked')]
    .map(input => input.value)
    .join(", ");

  const texto = `Olá, Sarah! Gostaria de conversar sobre um projeto.

*Nome:* ${nome}
*E-mail:* ${email}
*Instagram:* ${instagram || "Não informado"}
*O que quero criar:* ${tipos || "Não informado"}

*Sobre minha ideia:*
${mensagem}`;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(texto)}`;

  window.open(whatsappURL, "_blank", "noopener,noreferrer");

  form.hidden = true;
  success.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
});
