$(function() {
  
  $('#no-script').remove();

  

  var authors = ['Steven Erikson', 'Brandon Sanderson', 'Stieg Larsson', 'Robin Hobb', 'JRR Tolkien', 'GRR Martin', 'Isaac Asimov', 'Katherine Kerr', 'Robert Heinlein', 'Christopher Paolini'];
  $('#author').autocomplete({
    source: authors,
    autoFill: true
  });
  


  


 
});