var Login_username;
var Login_password;


$(document).ready(function(){

    var $Btn_Log=$("#Log_in");
    var $Password=$("#password");
    var $Username=$("#username");
    var $Warning=$("#Warning");

    


    var $Navbar=$("#nav");
    var $table1=$("#table1");
    var $table2=$("#table2");
    var $table3=$("#table3");
    var $outer=$("#outer");

    $Navbar.css("visibility","hidden");
    $table1.css("display","none");
    $table2.css("display","none");
    $table3.css("display","none");

    var $Users=$("#Users");
    var $L_Keys=$("#L_Keys");
    var $A_Users=$("#A_Users");

    $Btn_Log.on('click',function(){
        Login_username=$Username.val();
        Login_password=$Password.val();
        $.ajax({
            type:'Get',
            url:'http://autocad-script-generator.herokuapp.com/admin_login?username=' + Login_username + '&password=' + Login_password,
            success:function(){
                console.log("Success");
                $Warning.text("");
                $.ajax({
                    type:'GET',
                    url:'http://autocad-script-generator.herokuapp.com/users?username=' + Login_username + '&password=' + Login_password,
                    success:function(users_info){
            
                        $U_User_id.empty();
                        $U_Username.empty();
                        $U_Password.empty();
                        $U_Key.empty();
                        $U_System_id.empty();
            
                        $.each(users_info,function(i,u_info){
                            $U_User_id.append('<li>' + u_info.user_id + '</li>');
                            $U_Username.append('<li>' + u_info.username + '</li>');
                            $U_Password.append('<li>' + u_info.password + '</li>');
                            $U_Key.append('<li>' + u_info.key + '</li>');
                            $U_System_id.append('<li>' + u_info.system_id + '</li>');
            
                        });
                        
            
                        console.log("Success");
                    },
                    error:function(error){
            
                        window.alert("Error in loading User info");
                        console.log("Error");
            
                    }
                });
                $outer.css("display","none");
                $Navbar.css("visibility","visible");
                $table1.css("display","block");


            },
            error:function(){
                console.log("Error1 " + Login_username + " " + Login_password);

                $Warning.text("Invalid Username or Password.");
                $Warning.css({'color' : 'red', 'font-weight' : '500'});
            }
        });
    });


    

    
    var $Users=$("#Users");
    var $L_Keys=$("#L_Keys");
    var $A_Users=$("#A_Users");

    var $U_User_id=$("#U_User_id");
    var $U_Username=$("#U_Username");
    var $U_Password=$("#U_Password");
    var $U_Key=$("#U_Key");
    var $U_System_id=$("#U_System_id");

    var $Add_License=$("#Add_License");
    var $L_radio=$("#L_radio");
    var $L_License_Key=$("#L_License_Key");
    var $L_Is_Valid=$("#L_Is_Valid");

    var $A_Username=$("#A_Username");
    var $A_Password=$("#A_Password");

    var $Add_user=$("#Add_user");
    var $Remove_user=$("#Remove_user");

    var $Enable=$("#Enable");
    var $Disable=$("#Disable");

    /*$.ajax({
        type:'GET',
        url:'http://autocad-script-generator.herokuapp.com/users?username=' + Login_username + '&password=' + Login_password,
        success:function(users_info){

            $U_User_id.empty();
            $U_Username.empty();
            $U_Password.empty();
            $U_Key.empty();
            $U_System_id.empty();

            $.each(users_info,function(i,u_info){
                $U_User_id.append('<li>' + u_info.user_id + '</li>');
                $U_Username.append('<li>' + u_info.username + '</li>');
                $U_Password.append('<li>' + u_info.password + '</li>');
                $U_Key.append('<li>' + u_info.key + '</li>');
                $U_System_id.append('<li>' + u_info.system_id + '</li>');

            });
            

            console.log("Success");
        },
        error:function(error){

            window.alert("Error");
            console.log("Error");

        }
    });*/

    $Users.on('click',function(){
        $.ajax({
            type:'GET',
            url:'http://autocad-script-generator.herokuapp.com/users?username=' + Login_username + '&password=' + Login_password,
            success:function(users_info){

                $U_User_id.empty();
                $U_Username.empty();
                $U_Password.empty();
                $U_Key.empty();
                $U_System_id.empty();

                $.each(users_info,function(i,u_info){
                    $U_User_id.append('<li>' + u_info.user_id + '</li>');
                    $U_Username.append('<li>' + u_info.username + '</li>');
                    $U_Password.append('<li>' + u_info.password + '</li>');
                    $U_Key.append('<li>' + u_info.key + '</li>');
                    $U_System_id.append('<li>' + u_info.system_id + '</li>');

                });

                $table1.css("display","block");
                $table2.css("display","none");
                $table3.css("display","none");
                

                console.log("Success" + users_info);
            },
            error:function(error){

                window.alert("Error in loading User info");
                console.log("Error");
    
            }
        });
    });

    $L_Keys.on('click',function(){
        $.ajax({
            type:'GET',
            url:'http://autocad-script-generator.herokuapp.com/license?username=' + Login_username + '&password=' + Login_password,
            success:function(users_info){

                $L_radio.empty();
                $L_License_Key.empty();
                $L_Is_Valid.empty();
                $.each(users_info,function(i,L_Keys_info){

                    $L_radio.append('<input type="radio" class="d-block ms-1 mb-3 mt-1" name="License" value="' + L_Keys_info.key + '">');
                    $L_License_Key.append('<li class="d-inline ms-2 me-2">' + L_Keys_info.key + '</li> </br>');
                    $L_Is_Valid.append('<li>' + L_Keys_info.valid + '</li>');

                });
                $table2.css("display","block");
                $table1.css("display","none");
                $table3.css("display","none");

                console.log("Success");
            },
            error:function(){
                window.alert("Error in loading License info");
                console.log("Error");
            }
        });
    });

    $A_Users.on('click',function(){
        $.ajax({
            type:'GET',
            url:'http://autocad-script-generator.herokuapp.com/admin_users?username=' + Login_username + '&password=' + Login_password ,
            success:function(users_info){

                $A_Username.empty();
                $A_Password.empty();

                $.each(users_info,function(i,admin_user_info){
                    $A_Username.append('<li>' + admin_user_info.username + '</li>');
                    $A_Password.append('<li>' + admin_user_info.password + '</li>');

                });
                
                $table3.css("display","block");
                $table1.css("display","none");
                $table2.css("display","none");
                console.log("Success");
            },
            error:function(){
                window.alert("Error in loading Admin User info");
                console.log("Error");
            }
        });
    });

    
    $Add_user.on('click',function(){
        var uname=prompt("Please enter new username:","Username");
        var passw=prompt("Please enter new password:","Password");

        if(uname !=null && passw !=null){
            $.ajax({
                type:'POST',
                url:'http://autocad-script-generator.herokuapp.com/admin_users?username=' + Login_username + '&password=' + Login_password + '&new_user='+ uname+ '&new_user_pass=' +passw,
                success:function(a_info){
    
                    /*$A_Username.empty();
                    $A_Password.empty();*/
    
                    /*$.each(users_info,function(i,admin_user_info){
                        $A_Username.append('<li>' + a_info.username + '</li>');
                        $A_Password.append('<li>' + a_info.password + '</li>');
    
                    //});*/
                    
                    $.ajax({
                        type:'GET',
                        url:'http://autocad-script-generator.herokuapp.com/admin_users?username=' + Login_username + '&password=' + Login_password,
                        success:function(users_info){
            
                            $A_Username.empty();
                            $A_Password.empty();
            
                            $.each(users_info,function(i,admin_user_info){
                                $A_Username.append('<li>' + admin_user_info.username + '</li>');
                                $A_Password.append('<li>' + admin_user_info.password + '</li>');
            
                            });
                            
            
                            console.log("Success");
                        },
                        error:function(){
                            window.alert("Error in printing new user");
                            console.log("Error");
                        }
                    });
                    console.log("Success" + info);
                },
                error:function(){
                    window.alert("Error in adding new user");
                    console.log("Error");
                }
            });
        }
        

    });

    $Remove_user.on('click',function(){
        var rem_uname=prompt("Please enter username to be removed:","Username");

        if(rem_uname!=null){
            $.ajax({
                type:'DELETE',
                url:'http://autocad-script-generator.herokuapp.com/admin_users?username=' + Login_username + '&password=' + Login_password + '&del_user='+ rem_uname,
                success:function(){
    
                    console.log("Success");
                    $.ajax({
                        type:'GET',
                        url:'http://autocad-script-generator.herokuapp.com/admin_users?username=' + Login_username + '&password=' + Login_password,
                        success:function(users_info){
            
                            $A_Username.empty();
                            $A_Password.empty();
            
                            $.each(users_info,function(i,admin_user_info){
                                $A_Username.append('<li>' + admin_user_info.username + '</li>');
                                $A_Password.append('<li>' + admin_user_info.password + '</li>');
            
                            });
                            
            
                            console.log("Success");
                        },
                        error:function(){
                            window.alert("Error in printing user");
                            console.log("Error");
                        }
                    });
                },
                error:function(){
                    window.alert("Error in removing user");
                    console.log("Error");
                }
            });
        }
        

        

    });

    $Enable.on('click',function(){
        var License=$("input[type='radio'][name='License']:checked").val();

        console.log(License);

        $.ajax({
            type:'PUT',
            url:'http://autocad-script-generator.herokuapp.com/approve_license?username=' + Login_username + '&password=' + Login_password + '&license_key=' + License,
            success:function(){
                console.log("Success");

                $.ajax({
                    type:'GET',
                    url:'http://autocad-script-generator.herokuapp.com/license?username=' + Login_username + '&password=' + Login_password,
                    success:function(users_info){
        
                        $L_radio.empty();
                        $L_License_Key.empty();
                        $L_Is_Valid.empty();
                        $.each(users_info,function(i,L_Keys_info){
        
                            $L_radio.append('<input type="radio" class="d-block ms-1 mb-3 mt-1" name="License" value="' + L_Keys_info.key + '">');
                            $L_License_Key.append('<li class="d-inline ms-2 me-2">' + L_Keys_info.key + '</li> </br>');
                            $L_Is_Valid.append('<li>' + L_Keys_info.valid + '</li>');
        
                        });
                        $table2.css("display","block");
                        $table1.css("display","none");
                        $table3.css("display","none");
        
                        console.log("Success");
                    },
                    error:function(){
                        window.alert("Error in listing License Details");
                        console.log("Error");
                    }
                });

            },
            error:function(){
                window.alert("Error in enabling License Key"); 
                console.log("Error");
            }
        });
    });


    $Disable.on('click',function(){
        var License=$("input[type='radio'][name='License']:checked").val();

        console.log(License);

        $.ajax({
            type:'PUT',
            url:'http://autocad-script-generator.herokuapp.com/revoke_license?username=' + Login_username + '&password=' + Login_password + '&license_key=' + License,
            success:function(){
                console.log("Success");

                $.ajax({
                    type:'GET',
                    url:'http://autocad-script-generator.herokuapp.com/license?username=' + Login_username + '&password=' + Login_password,
                    success:function(users_info){
        
                        $L_radio.empty();
                        $L_License_Key.empty();
                        $L_Is_Valid.empty();
                        $.each(users_info,function(i,L_Keys_info){
        
                            $L_radio.append('<input type="radio" class="d-block ms-1 mb-3 mt-1" name="License" value="' + L_Keys_info.key + '">');
                            $L_License_Key.append('<li class="d-inline ms-2 me-2">' + L_Keys_info.key + '</li> </br>');
                            $L_Is_Valid.append('<li>' + L_Keys_info.valid + '</li>');
        
                        });
                        $table2.css("display","block");
                        $table1.css("display","none");
                        $table3.css("display","none");
        
                        console.log("Success");
                    },
                    error:function(){
                        window.alert("Error in listing License Key"); 
                        console.log("Error");
                    }
                });

            },
            error:function(){
                window.alert("Error in disabling License Key"); 
                console.log("Error");
            }
        });
    });
    
    $Add_License.on('click',function(){
        $.ajax({
            type:'POST',
            url:'http://autocad-script-generator.herokuapp.com/license?username=' + Login_username + '&password=' + Login_password,
            success:function(){

                $.ajax({
                    type:'GET',
                    url:'http://autocad-script-generator.herokuapp.com/license?username=' + Login_username + '&password=' + Login_password,
                    success:function(users_info){
        
                        $L_radio.empty();
                        $L_License_Key.empty();
                        $L_Is_Valid.empty();
                        $.each(users_info,function(i,L_Keys_info){
        
                            $L_radio.append('<input type="radio" class="d-block ms-1 mb-3 mt-1" name="License" value="' + L_Keys_info.key + '">');
                            $L_License_Key.append('<li class="d-inline ms-2 me-2">' + L_Keys_info.key + '</li> </br>');
                            $L_Is_Valid.append('<li>' + L_Keys_info.valid + '</li>');
        
                        });
                        $table2.css("display","block");
                        $table1.css("display","none");
                        $table3.css("display","none");
        
                        console.log("Success");
                    },
                    error:function(){
                        window.alert("Error in listing License Key"); 
                        console.log("Error");
                    }
                });
                console.log("Success");
            },
            error:function(){
                window.alert("Error in adding new License Key"); 
                console.log("Error");
            }
        });
    });
});