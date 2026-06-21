const shareBTN = $('[class="share-button"]');
const mobileBar = $('#mobile-social-bar');
const authorSec = $('#author-section');
const desktopBar = $('#hidden-class');

let touched = false;

shareBTN.on('touchend', (e) => {
    touched = true;
    const isHidden = mobileBar.prop('hidden');

    if (isHidden) {
        authorSec.prop('hidden', true);
        mobileBar.prop('hidden', false);
    } else {
        authorSec.prop('hidden', false);
        mobileBar.prop('hidden', true);
    }

    e.preventDefault();
});

shareBTN.on('mouseover', () => {
    if (touched) {
        touched = false;
        return;
    }
    desktopBar.toggle();
    desktopBar.removeAttr('hidden');
});