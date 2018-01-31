var next_objective_id = 1;

export function objective(options){
  // Constructor
  var defaults = {
    id:                 next_objective_id,
    progress_measure:   0,
    score:              null,
    accomplished_score: null,
    accomplished:       false
  };
  var objective = Object.assign({}, defaults, options);

  objective.progress_measure = Math.max(0,Math.min(1,objective.progress_measure));

  if(typeof objective.score == "number"){
    objective.score = Math.max(0,Math.min(1,objective.score));
    if(typeof objective.accomplished_score == "number"){
      objective.accomplished_score = Math.min(objective.accomplished_score,objective.score);
    }
  }

  next_objective_id += 1;
  return objective;
}

const TRS = {
  "Use a few words, avoid common phrases": "Usa varias palabras, evita palabras comunes",
  'Straight rows of keys are easy to guess': "Filas seguidas de teclas son fáciles de adivinar",
  'Short keyboard patterns are easy to guess': "Patrones del teclado cortos son sencillos de adivinar",
  'Use a longer keyboard pattern with more turns': "Utiliza una combinación de teclas con más teclas",
  'Repeats like "aaa" are easy to guess': "Repeticiones como 'aaa' son sencillas de adivinar",
  'Repeats like "abcabcabc" are only slightly harder to guess than "abc"':"Repeticiones como 'abcabc' son solamente un poco más dificiles de adivinar que 'abc'",
  'Avoid repeated words and characters':"Evita palabras y caracteres repetidos",
  "Sequences like abc or 6543 are easy to guess":"Secuencias como abc o 6543 son sencillas de adivinar",
  'Avoid sequences': "Evita secuencias",
  "Recent years are easy to guess": "Años recientes son sencillos de adivinar",
  'Avoid recent years':"Evita años recientes",
  'Avoid years that are associated with you':"Evita años que estén relacionados contigo",
  "Dates are often easy to guess":"Las fechas son normalmente sencillas de adivinar",
  'Avoid dates and years that are associated with you':"Evita fechas y años recientes que estén asociados contigo",
  'This is a top-10 common password':"Esta es una contraseña del top-10 más comunes",
  'This is a top-100 common password':"Esta es una contraseña del top-100 más comunes",
  'This is a very common password': "Esta es una contraseña muy común",
  'This is similar to a commonly used password':"Esta contraseña es muy similar a algunas muy comunes",
  'A word by itself is easy to guess':"Una palabra suelta es muy sencilla de adivinar",
  'Names and surnames by themselves are easy to guess':"Nombres y apellidos sueltos son sencillos de adivinar",
  'Common names and surnames are easy to guess':"Nombres comunes y apellidos son sencillos de adivinar",
  "Capitalization doesn't help very much":"Poner la primera en mayúscula ayuda poco",
  "All-uppercase is almost as easy to guess as all-lowercase":"Poner todo en mayúsculas es casi tan sencillo de adivinar como todo minúsculas",
  "Reversed words aren't much harder to guess":"Palabras invertidad son casi tan sencillas de adivinar como las normales",
  "Predictable substitutions like '@' instead of 'a' don't help very much":"Sustituciones predecibles como '@' en lugar de 'a' son sencillas de adivinar",
  "Add another word or two. Uncommon words are better.": "Añade alguna otra palabra. Palabras que no estén en el diccionario mejor.",
  "less than a second": "menos de un segundo",


}

export function translate(text){
  if(TRS[text]){
    return TRS[text];
  } else {
    return text;
  }
}

export function translateTime(text){
  if(TRS[text]){
    return TRS[text];
  } else {
    return text.replace("second", "segundo").replace("minute", "minuto").replace("hour", "hora").replace("day", "día").replace("week", "semana").replace("months", "meses").replace("month", "mes").replace("year", "año").replace("century", "siglo").replace("centuries", "siglos");
  }
}
