import Swal from "sweetalert2";

export default function respBack(title, text, icon, btn) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: btn,
    confirmButtonColor: '#4669f6',
    width: 600,
    padding: '3em',
    color: '#080860',
    background: '#ffffff',
    backdrop: `
    rgba(84, 109, 247, 0.346)
    `
  })
}
