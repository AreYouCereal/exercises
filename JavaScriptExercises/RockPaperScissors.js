<button id="scissors">scissors</button>

   $('#scissors').on('click', function(){
       var result = compare('scissors', computerChoice());
       $("#decision").html(result);
    });