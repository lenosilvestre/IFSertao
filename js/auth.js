import { supabase } from './script.js';

// Função para obter o user_id do usuário autenticado
export async function getUserId() {
    const { data, error } = await supabase.auth.getUser();
    if (data && data.user) {
        return data.user.id;
    } else {
        window.location.href = "login.html";
    }
}
const logoutBtn = document.getElementById('logout-btn');

if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
        await supabase.auth.signOut();
        window.location.href = "login.html";
    });
}