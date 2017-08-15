/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Back */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_1 */
    $(document).on("click", ".uib_w_1", function(evt)
    {
         /*global activate_page */
         activate_page("#info"); 
         return false;
    });
    
        /* button  Create Account */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_page */
         activate_page("#Create_Account"); 
         return false;
    });
    
        /* button  Login */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_page */
         activate_page("#UserDashboard"); 
         return false;
    });
    
        /* button  .uib_w_17 */
    $(document).on("click", ".uib_w_17", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_25"));  
         return false;
    });
    
        /* button  Logout */
    $(document).on("click", ".uib_w_16", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_19 */
    $(document).on("click", ".uib_w_19", function(evt)
    {
         /*global activate_page */
         activate_page("#TopTrendy"); 
         return false;
    });
    
        /* button  Food */
    $(document).on("click", ".uib_w_20", function(evt)
    {
         /*global activate_page */
         activate_page("#Food"); 
         return false;
    });
    
        /* button  Travel */
    $(document).on("click", ".uib_w_21", function(evt)
    {
         /*global activate_page */
         activate_page("#Travel"); 
         return false;
    });
    
        /* button  Leisure */
    $(document).on("click", ".uib_w_22", function(evt)
    {
         /*global activate_page */
         activate_page("#Leisure"); 
         return false;
    });
    
        /* button  Fashion */
    $(document).on("click", ".uib_w_23", function(evt)
    {
         /*global activate_page */
         activate_page("#Fashion"); 
         return false;
    });
    
        /* button  Technology */
    $(document).on("click", ".uib_w_24", function(evt)
    {
         /*global activate_page */
         activate_page("#technology"); 
         return false;
    });
    
        /* button  .uib_w_8 */
    $(document).on("click", ".uib_w_8", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_43", function(evt)
    {
         /*global activate_page */
         activate_page("#UserDashboard"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_42", function(evt)
    {
         /*global activate_page */
         activate_page("#UserDashboard"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_41", function(evt)
    {
         /*global activate_page */
         activate_page("#UserDashboard"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_40", function(evt)
    {
         /*global activate_page */
         activate_page("#UserDashboard"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_39", function(evt)
    {
         /*global activate_page */
         activate_page("#UserDashboard"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_38", function(evt)
    {
         /*global activate_page */
         activate_page("#UserDashboard"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
