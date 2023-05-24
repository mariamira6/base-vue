import Swal from "sweetalert2";

export default function respBack(title, text, icon, btn, backdrop, color) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: btn,
    confirmButtonColor: color,
    width: 600,
    padding: '1em',
    color: '#000',
    background: '#ffffff',
    backdrop: backdrop
  })
}
