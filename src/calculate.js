export function calculate(cur_force, new_force) {
    cur_force *= 10;
    new_force *= 10;

    if (cur_force === new_force) {
        return 0;
    } else if (cur_force !== 0 && new_force !== 0) {
        const ratio = cur_force / new_force;
        const n = Math.ceil(Math.log2(ratio));
        return n;
    }
    return null; // caso não seja comparável
}
