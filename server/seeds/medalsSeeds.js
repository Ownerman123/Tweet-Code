// Import Medal from the models/Medal.js file.
import Medal from "../models/Medal.js";
// Import User from the models/User.js file.
import User from "../models/User.js";
// Create an array of medal data.
const medalData = [
  {
    title: "you Suck!",
    description: "this guy sucks.",
    price: 20,
  },
  {
    title: "Logo V1",
    description: "The first iteration of the TweetCode logo",
    price: 500,
  },
  {
    title: "you Suck!",
    description: "this guy sucks.",
    price: 20,
  },
];
// Create an async function to seed the medals.
const seedMedals = async () => {
  try {
    // Get all users.
    const user = await User.findOne();

    if (!user) {
      throw new Error("User not found. Please seed users first.");
    }

    // Create medals.
    const createdmedals = await Promise.all(
      medalData.map(async (medal) => {
        const newMedal = new Medal({
          ...medal,
        });
        // Await the new medal to save.
        await newMedal.save();
        return newMedal;
      })
    );
    // .then(async (medals) => {

    //      user.medals = [ ...user.medals, ...medals];
    //      const newUser = await user.save();

    //      return medals;

    // });

    console.log(`${createdmedals.length} medals seeded successfully`);
  } catch (err) {
    console.error("Error seeding Medals:", err);
    throw err; // Re-throw the error so it's caught in the main seed function.
  }
};
// Export the seedMedals function.
export default seedMedals;
