import { userData } from "./data.js"

const main = document.getElementById("main")

let dom = ""

for (let user of userData) {
    dom += `
        <section class="card container">
            <div class="user-info flex">
                <img class="user-img navbar-img" src="${user["profile-pic"]}" alt="${user.name} + ''s profile picture'">
                <div>
                    <p class="user-name">${user.name}</p>
                    <p class="location">${user.location}</p>
                </div>
            </div>

            <div class="post">
                <img class="container post" src="${user.post}" alt="${user.name} + ''s post'">
            </div>

            <div class="like-comment-share">
                <div>
                    <img class="icon" src="images/icon-heart.png" alt="like button">
                    <img class="icon" src="images/icon-comment.png" alt="comment button">
                    <img class="icon" src="images/icon-dm.png" alt="share button">
                </div>
                <div>
                    <p class="likes">${user.likes} likes</p>
                </div>
                <div class="comment flex">
                    <p class="likes">${user.friend}</p>
                    <p class="likes comment-msg">${userData[0].comment}</p>
                </div>
            </div>
        </section>
    `
}

 main.innerHTML = dom


//  PROTOTYPE
// const post = `
// //     <section class="card container">
// //         <div class="user-info">
// //             <img class="user-img navbar-img" src="${userData[0]["profile-pic"]}" alt="${userData[0].name} + ''s profile picture'">
// //             <div>
// //                 <p class="user-name">${userData[0].name}</p>
// //                 <p class="location">${userData[0].location}</p>
// //             </div>
// //         </div>

// //         <div>
// //             <img class="container" src="${userData[0].post}" alt="${userData[0].name} + ''s post'">
// //         </div>

// //         <div>
// //             <div class="like-comment-share">
// //                 <img class="icon" src="images/icon-heart.png" alt="like button">
// //                 <img class="icon" src="images/icon-comment.png" alt="comment button">
// //                 <img class="icon" src="images/icon-dm.png" alt="share button">
// //             </div>
// //             <div>
// //                 <p class="likes">${userData[0].likes} likes</p>
// //             </div>
// //             <div class="comment">
// //                 <p class="likes">${userData[0].friend}</p>
// //                 <p class="likes comment-msg">${userData[0].comment}</p>
// //             </div>
// //         </div>
// //     </section>
// // `