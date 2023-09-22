const isLoggedIn: boolean = true;
const isAdmin: boolean = false;

if (isLoggedIn && isAdmin) {
  console.log("You are logged in as an admin.");
} else if (isLoggedIn || isAdmin) {
  console.log("You are either logged in or an admin.");
} else {
  console.log("You are neither logged in nor an admin.");
}
