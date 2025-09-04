
// Modal functionality
document.addEventListener('DOMContentLoaded', function () {
    const authModal = new bootstrap.Modal(document.getElementById('authModal'));

    // Show modal when auth button is clicked
    document.getElementById('auth-button').addEventListener('click', function (e) {
        e.preventDefault();
        authModal.show();
    });

    // Switch between login and signup tabs
    document.getElementById('switch-to-signup')?.addEventListener('click', function (e) {
        e.preventDefault();
        const signupTab = new bootstrap.Tab(document.getElementById('signup-tab'));
        signupTab.show();
    });

    document.getElementById('switch-to-login')?.addEventListener('click', function (e) {
        e.preventDefault();
        const loginTab = new bootstrap.Tab(document.getElementById('login-tab'));
        loginTab.show();
    });

    // Form submission
    document.getElementById('searchForm')?.addEventListener('submit', function (e) {
        e.preventDefault();
        document.getElementById('searchResults').classList.remove('d-none');
    });
});