const damage = 4;
const tileDamage = 10;
const cooldown = 30;

const thorns = extendContent(ShockMine, "thorns", {});

thorns.buildType = () => extendContent(ShockMine.ShockMineBuild, thorns, {
	unitOn(unit) {
        if (this.timer.get(0, cooldown)) {
            unit.damage(damage);
            this.damage(tileDamage);
        }
    }
});

