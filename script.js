let points = 0;

function watchAd(pointsEarned) {
    points += pointsEarned;
    document.getElementById('points').textContent = points;
    alert(`لقد ربحت ${pointsEarned} نقطة!`);
}

function redeemReward(cost, reward) {
    if (points >= cost) {
        points -= cost;
        document.getElementById('points').textContent = points;
        alert(`لقد استبدلت النقاط: ${reward}`);
    } else {
        alert("ليس لديك نقاط كافية!");
}
}
function navigateTo(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}
