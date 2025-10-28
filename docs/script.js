// Standalone toaster utility with demo wiring
const Toast = (function () {
    const container = document.getElementById('toast-container');

    const ICONS = {
        success: '✓',
        error: '✖',
        info: 'ℹ',
    };

    function show(message = '', { type = 'info', duration = 4000 } = {}) {
        const toast = document.createElement('div');
        toast.className = 'max-w-sm w-full pointer-events-auto rounded shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden transform transition-all duration-300';

        const colors = {
            success: 'border-l-4 border-green-500',
            error: 'border-l-4 border-red-500',
            info: 'border-l-4 border-blue-500',
        };

        const icon = ICONS[type] || ICONS.info;

        toast.innerHTML = `
            <div class="p-3 bg-white ${colors[type] || colors.info} flex items-start gap-3">
                <div class="flex-none text-lg text-gray-700">${icon}</div>
                <div class="flex-1 text-sm text-gray-800">${escapeHtml(message || defaultMessage(type))}</div>
                <button class="close-btn text-gray-400 hover:text-gray-600 ml-2" aria-label="Dismiss">✕</button>
            </div>
        `;

        // enter
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(8px)';

        container.appendChild(toast);

        requestAnimationFrame(() => {
            toast.style.transition = 'opacity 250ms ease, transform 250ms ease';
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        });

        // auto dismiss
        const t = setTimeout(() => dismiss(), duration);

        function dismiss() {
            clearTimeout(t);
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(8px)';
            setTimeout(() => toast.remove(), 260);
        }

        toast.querySelector('.close-btn').addEventListener('click', dismiss);

        // return dismiss so callers can programmatically close
        return { dismiss };
    }

    function defaultMessage(type) {
        return {
            success: 'Success',
            error: 'Something went wrong',
            info: 'Info',
        }[type] || 'Notice';
    }

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    return { show };
})();

// Demo wiring for toaster-only page
document.addEventListener('DOMContentLoaded', () => {
    const btnSuccess = document.getElementById('show-success');
    const btnInfo = document.getElementById('show-info');
    const btnError = document.getElementById('show-error');

    btnSuccess.addEventListener('click', () => {
        Toast.show('Operation completed', { type: 'success' });
    });

    btnInfo.addEventListener('click', () => {
        Toast.show('Here is some information', { type: 'info' });
    });

    btnError.addEventListener('click', () => {
        Toast.show('An error occurred', { type: 'error' });
    });
});