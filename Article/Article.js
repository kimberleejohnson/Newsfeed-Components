// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(article) {
    // assign this.domElement to the passed in domElement
    this.article = article;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.article.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerHTML = "Expand"; 
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }

  // Methods
  // Using our reference to the domElement, toggle a class to expand or hide the article.
  expandArticle() {
    this.article.classList.toggle('article-open'); 
    this.article.classList.toggle('close'); 
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

// Selecting all classes named .article and assigning to articles 
let articles = document.querySelectorAll('.article');

// Creating .forEach chain to iterate over all articles 
articles.forEach(function(article){
  return new Article (article); 
}); 