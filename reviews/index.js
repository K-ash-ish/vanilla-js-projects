const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

  const picture = document.querySelector(".user-image");
  const userName = document.querySelector("#name");
  const position = document.querySelector("#position");
  const review = document.querySelector("#review");
  const previousButton = document.querySelector(".previous-button");
  const nextButton = document.querySelector(".next-button");
  const surpriseButton = document.querySelector(".surprise-button");

  let currentItem = 0;

  // first display
  window.addEventListener("DOMContentLoaded", function(){
    setInfo(currentItem);
  })

  //nextButton
  nextButton.addEventListener("click", function(){
    currentItem++;
    if(currentItem <=3){
      setInfo(currentItem);
    }
    else{
      currentItem=0;
      setInfo(currentItem);
    }
    

  })

  // previosButton
  previousButton.addEventListener("click", function(){
    // alert("CLICKED")
    currentItem--;
    if(currentItem<0){
      currentItem = 3;
      setInfo(currentItem);
    }
    else{
      setInfo(currentItem);
    }
    
  })
  // Surprise button
  surpriseButton.addEventListener("click", function(){
    currentItem = randomNumber();
    setInfo(currentItem);
  })

  function randomNumber(){
    let randomNumber = Math.random()*4;
    return Math.floor(randomNumber);
  }

  // to assign info 
  function setInfo(number){
    userName.textContent = reviews[number].name;
    position.textContent = reviews[number].job;
    review.textContent = reviews[number].text;
    userName.textContent = reviews[number].name;
    picture.src = reviews[number].img;
  }