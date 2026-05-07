const input = document.getElementById('input');
const output = document.getElementById('output');
const calculateBtn = document.getElementById('calculateBtn');

calculateBtn.addEventListener("click", function () {

    const text = input.value;

    const lines = text.split('\n');

    let totalSeconds = 0;

    for (let line of lines) {

        const parts = line.split(":");

        const nums = parts.map(Number);

        let hours = 0;
        let minutes = 0;
        let seconds = 0;

        if (nums.length === 3) {
            hours = nums[0];
            minutes = nums[1];
            seconds = nums[2];
        }

        else if (nums.length === 2) {
            minutes = nums[0];
            seconds = nums[1];
        }

        const total = hours * 3600 + minutes * 60 + seconds;

        totalSeconds += total;
    }

    const finalHours = Math.floor(totalSeconds / 3600);

    const remaining = totalSeconds % 3600;

    const finalMinutes = Math.floor(remaining / 60);

    const finalSeconds = remaining % 60;

    output.textContent =
        `${finalHours}h ${finalMinutes}m ${finalSeconds}s`;
});