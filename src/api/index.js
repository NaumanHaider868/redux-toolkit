import Chance from "chance";

const chance = Chance()

const fakeUser = () => {
    // console.log(chance.name({ middle: true }));
    return chance.name({ middle: true })
}

export default fakeUser