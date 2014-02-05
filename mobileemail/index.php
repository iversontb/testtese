﻿
<?php
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: petruninevgeniy@gmail.com\r\n";
$message = '

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Responsive email template</title>
	<style>
	
	body {
    width:100%!important;
    -webkit-text-size-adjust:100%;
    -ms-text-size-adjust:100%;
    margin:0;
    padding:0;
	}
  
  .ExternalClass {
    width: 100%;
  }
  
  span{
    font-family: Arial, sans-serif;
    font-size:15px;
    line-height:20px;
    color:#555;
  }
	
	@media only screen and (max-width: 600px) {

    table[class="content_wrap"] {
      width: 94%!important;
    }
    
    table[class="full_width"] {
      width: 100%!important;
    }
    
		table[class="hide"], img[class="hide"], td[class="hide"] {
      display: none !important;
    }
    
    td[class="text-center"] {
      text-align: center!important;
    }
    
    a[class="button"] {
      border-radius:2px;
      -moz-border-radius:2px;
      -webkitborder-radius:2px;
      background-color:#308F9B;
      color:#fff!important;
      padding: 5px;
      display:block;
      text-decoration: none;
      text-transform: uppercase;
      margin: 0 0 10px 0;
    }
    
	}
	</style>
</head>

<body bgcolor="#d9dfe2" topmargin="0" leftmargin="0" marginheight="0" marginwidth="0" style="-webkit-font-smoothing:antialiased;width:100% !important;background-color:#d9dfe2;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;-webkit-text-size-adjust:none;">

  <!--////////////////////////////////////////////////////////////////////////////////////////////////////
  Preheader text will only appear in certain client inboxes but are an excellent way of engaging the user.
  /////////////////////////////////////////////////////////////////////////////////////////////////////-->
  <span style="display: none;font-size: 0px; color:#ECF0F5; line-height: 0;">Engaging preheader text goes here!</span>
  
  <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#d9dfe2" style="font-family: Arial, sans-serif;font-size:15px;line-height:20px;color:#555;">
    <tr>
      <td bgcolor="#d9dfe2" width="100%">
        
        <!--Head banner-->
        <table width="100%" cellpadding="4" cellspacing="0" border="0" bgcolor="#0F2056">
          <tr>
            <td bgcolor="#2F353E" width="100%" style="font-size:14px;font-family:Arial,sans-serif;text-align:center;">
              <a href="#" style="color:#f2f2f2;text-decoration:none;font-weight:bold;">View in browser</a>
            </td>
          </tr>
        </table>
	
        <!--Content wrapper-->
        <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="content_wrap">
          <tr>
            <td width="100%" height="20" bgcolor="#d9dfe2"></td>
          </tr>
          <tr>
            <td bgcolor="#d9dfe2">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <!--Logo-->
                  <td bgcolor="#d9dfe2" width="100%" class="text-center">
                    <a href="#">
                      <img src="http://demo1.webares.com.ua/mobileemail/img/logo.jpg" width="129" height="75" alt="logo" border="0" />
                    </a>
                  </td>
                  <td bgcolor="#d9dfe2" width="200" class="hide">
                    <!--Social media icons-->
                    <table width="200" height="44" cellpadding="0" cellspacing="0" border="0" align="center">
                      <tr>
                        <td width="44">
                          <a href="#">
                            <img src="http://demo1.webares.com.ua/mobileemail/img/twitter_icon.jpg" width="44" height="44" alt="Twitter" border="0" />
                          </a>
                        </td>
                        <td width="8"></td>
                        <td width="44">
                          <a href="#">
                            <img src="http://demo1.webares.com.ua/mobileemail/img/facebook_icon.jpg" width="44" height="44" alt="Facebook" border="0" />
                          </a>
                        </td>
                        <td width="8"></td>
                        <td width="44">
                          <a href="#">
                            <img src="http://demo1.webares.com.ua/mobileemail/img/linkedin_icon.jpg" width="44" height="44" alt="LinkedIn" border="0" />
                          </a>
                        </td>
                        <td width="8"></td>
                        <td width="44">
                          <a href="#">
                            <img src="http://demo1.webares.com.ua/mobileemail/img/google_plus_icon.jpg" width="44" height="44" alt="Google Plus" border="0" />
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td width="100%" height="10" bgcolor="#d9dfe2"></td>
          </tr>
          <tr>
            <td width="100%">
            
              <!--Content 1-->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" style="background:#fff;">
                <tr>
                  <td width="4"></td>
                  <td bgcolor="#fff" width="100%" valign="top">
                    <table width="100%" cellpadding="15" cellspacing="0" border="0" bgcolor="#fff">
                      <tr>
                        <td bgcolor="#fff" style="background:#fff;">
                          <table width="100" cellpadding="0" cellspacing="0" border="0" align="right" class="full_width">
                            <tr>
                              <td width="100%" class="text-center">
                                <!--image-->
                                <img src="http://demo1.webares.com.ua/mobileemail/img/icon_1.jpg" border="0" alt="" width="100" height="100" />
                              </td>
                            </tr>
                          </table>
                          <table width="20" cellpadding="0" cellspacing="0" border="0" align="right" class="hide">
                            <tr>
                              <td width="100%">
                                &nbsp;
                              </td>
                            </tr>
                          </table> 
                          <table cellpadding="0" cellspacing="0" border="0" class="full_width">
                            <tr>
                              <td width="100%" class="text-center" style="font-family: Arial, sans-serif;font-size:15px;line-height:20px;color:#555;">
                                <a href="#" style="font-family: Arial, sans-serif;font-size:18px;line-height:27px;color:#333;margin:0;font-weight:bold;text-decoration:none;">A meaningful and engaging title goes here</a>
                                <br />
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod vehicula nunc, at mattis libero faucibus ac.</span>
                                <br /><br />
                                <a href="#" class="button" style="color:#399A9B;font-family: Calibri,  Arial, sans-serif;font-size:18px;line-height:22px;">Find out more</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td width="4"></td>
                </tr>
                <tr height="4">
                  <td width="4">
                    <table width="4" cellpadding="0" cellspacing="0" border="0">
                      <tr height="1">
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                      </tr>
                      <tr height="1">
                        <td width="1" bgcolor="#d9dfe2"></td>
                        <td width="3" colspan="3" bgcolor="#acb4b8"></td>
                      </tr>
                      <tr height="1">
                        <td width="2" colspan="2" bgcolor="#d9dfe2"></td> 
                        <td width="2" colspan="2" bgcolor="#acb4b8"></td>
                      </tr>
                      <tr height="1">
                        <td width="3" colspan="3" bgcolor="#d9dfe2"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                      </tr>
                    </table>
                  </td>
                  <td width="100%" bgcolor="#ECF0F5"></td>
                  <td width="4">
                    <table width="4" cellpadding="0" cellspacing="0" border="0">
                      <tr height="1">
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                      </tr>
                      <tr height="1">
                        <td width="3" colspan="3" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#d9dfe2"></td>
                      </tr>
                      <tr height="1">
                        <td width="2" colspan="2" bgcolor="#acb4b8"></td>
                        <td width="2" colspan="2" bgcolor="#d9dfe2"></td> 
                      </tr>
                      <tr height="1">
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="3" colspan="3" bgcolor="#d9dfe2"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <!--end Content 1-->
              
            </td>
          </tr>
          <tr>
            <td width="100%">
              <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr height="10">
                  <td width="4" bgcolor="#d9dfe2">
                    <table width="4" cellpadding="0" cellspacing="0" border="0">
                      <tr height="4">
                        <td width="4" bgcolor="#d9dfe2"></td>
                      </tr>
                    </table>
                  </td>
                  <td width="100%" bgcolor="#ECF0F5"></td>
                  <td width="4" bgcolor="#d9dfe2">
                    <table width="4" cellpadding="0" cellspacing="0" border="0">
                      <tr height="4">
                        <td width="4" bgcolor="#d9dfe2"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td width="100%">
              
              <!--Content 2-->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" style="background:#fff;">
                <tr>
                  <td width="4"></td>
                  <td bgcolor="#fff" width="100%" valign="top">
                    <table width="100%" cellpadding="15" cellspacing="0" border="0" bgcolor="#fff">
                      <tr>
                        <td bgcolor="#fff" style="background:#fff;">
                          <table width="100" cellpadding="0" cellspacing="0" border="0" align="right" class="full_width">
                            <tr>
                              <td width="100%" class="text-center">
                                <!--image-->
                                <img src="http://demo1.webares.com.ua/mobileemail/img/icon_2.jpg" border="0" alt="" width="100" height="100" />
                              </td>
                            </tr>
                          </table>
                          <table width="20" cellpadding="0" cellspacing="0" border="0" align="right" class="hide">
                            <tr>
                              <td width="100%">
                                &nbsp;
                              </td>
                            </tr>
                          </table> 
                          <table cellpadding="0" cellspacing="0" border="0" class="full_width">
                            <tr>
                              <td width="100%" class="text-center" style="font-family: Arial, sans-serif;font-size:15px;line-height:20px;color:#555;">
                                <a href="#" style="font-family: Arial, sans-serif;font-size:18px;line-height:27px;color:#333;margin:0;font-weight:bold;text-decoration:none;">A meaningful and engaging title goes here</a>
                                <br />
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod vehicula nunc, at mattis libero faucibus ac.</span>
                                <br /><br />
                                <a href="#" class="button" style="color:#399A9B;font-family: Calibri,  Arial, sans-serif;font-size:18px;line-height:22px;">Find out more</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td width="4"></td>
                </tr>
                <tr height="4">
                  <td width="4">
                    <table width="4" cellpadding="0" cellspacing="0" border="0">
                      <tr height="1">
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                      </tr>
                      <tr height="1">
                        <td width="1" bgcolor="#d9dfe2"></td>
                        <td width="3" colspan="3" bgcolor="#acb4b8"></td>
                      </tr>
                      <tr height="1">
                        <td width="2" colspan="2" bgcolor="#d9dfe2"></td> 
                        <td width="2" colspan="2" bgcolor="#acb4b8"></td>
                      </tr>
                      <tr height="1">
                        <td width="3" colspan="3" bgcolor="#d9dfe2"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                      </tr>
                    </table>
                  </td>
                  <td width="100%" bgcolor="#ECF0F5"></td>
                  <td width="4">
                    <table width="4" cellpadding="0" cellspacing="0" border="0">
                      <tr height="1">
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                      </tr>
                      <tr height="1">
                        <td width="3" colspan="3" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#d9dfe2"></td>
                      </tr>
                      <tr height="1">
                        <td width="2" colspan="2" bgcolor="#acb4b8"></td>
                        <td width="2" colspan="2" bgcolor="#d9dfe2"></td> 
                      </tr>
                      <tr height="1">
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="3" colspan="3" bgcolor="#d9dfe2"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <!--end Content 2-->
              
            </td>
          </tr>
          <tr>
            <td width="100%">
              <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr height="10">
                  <td width="4" bgcolor="#d9dfe2">
                    <table width="4" cellpadding="0" cellspacing="0" border="0">
                      <tr height="4">
                        <td width="4" bgcolor="#d9dfe2"></td>
                      </tr>
                    </table>
                  </td>
                  <td width="100%" bgcolor="#ECF0F5"></td>
                  <td width="4" bgcolor="#d9dfe2">
                    <table width="4" cellpadding="0" cellspacing="0" border="0">
                      <tr height="4">
                        <td width="4" bgcolor="#d9dfe2"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td width="100%">
              
              <!--Content 3-->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" style="background:#fff;">
                <tr>
                  <td width="4"></td>
                  <td bgcolor="#fff" width="100%" valign="top">
                    <table width="100%" cellpadding="15" cellspacing="0" border="0" bgcolor="#fff">
                      <tr>
                        <td bgcolor="#fff" style="background:#fff;">
                          <table width="100" cellpadding="0" cellspacing="0" border="0" align="right" class="full_width">
                            <tr>
                              <td width="100%" class="text-center">
                                <!--image-->
                                <img src="http://demo1.webares.com.ua/mobileemail/img/icon_3.jpg" border="0" alt="" width="100" height="100" />
                              </td>
                            </tr>
                          </table>
                          <table width="20" cellpadding="0" cellspacing="0" border="0" align="right" class="hide">
                            <tr>
                              <td width="100%">
                                &nbsp;
                              </td>
                            </tr>
                          </table> 
                          <table cellpadding="0" cellspacing="0" border="0" class="full_width">
                            <tr>
                              <td width="100%" class="text-center" style="font-family: Arial, sans-serif;font-size:15px;line-height:20px;color:#555;">
                                <a href="#" style="font-family: Arial, sans-serif;font-size:18px;line-height:27px;color:#333;margin:0;font-weight:bold;text-decoration:none;">A meaningful and engaging title goes here</a>
                                <br />
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod vehicula nunc, at mattis libero faucibus ac.</span>
                                <br /><br />
                                <a href="#" class="button" style="color:#399A9B;font-family: Calibri,  Arial, sans-serif;font-size:18px;line-height:22px;">Find out more</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td width="4"></td>
                </tr>
                <tr height="4">
                  <td width="4">
                    <table width="4" cellpadding="0" cellspacing="0" border="0">
                      <tr height="1">
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                      </tr>
                      <tr height="1">
                        <td width="1" bgcolor="#d9dfe2"></td>
                        <td width="3" colspan="3" bgcolor="#acb4b8"></td>
                      </tr>
                      <tr height="1">
                        <td width="2" colspan="2" bgcolor="#d9dfe2"></td> 
                        <td width="2" colspan="2" bgcolor="#acb4b8"></td>
                      </tr>
                      <tr height="1">
                        <td width="3" colspan="3" bgcolor="#d9dfe2"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                      </tr>
                    </table>
                  </td>
                  <td width="100%" bgcolor="#ECF0F5"></td>
                  <td width="4">
                    <table width="4" cellpadding="0" cellspacing="0" border="0">
                      <tr height="1">
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                      </tr>
                      <tr height="1">
                        <td width="3" colspan="3" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#d9dfe2"></td>
                      </tr>
                      <tr height="1">
                        <td width="2" colspan="2" bgcolor="#acb4b8"></td>
                        <td width="2" colspan="2" bgcolor="#d9dfe2"></td> 
                      </tr>
                      <tr height="1">
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="3" colspan="3" bgcolor="#d9dfe2"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <!--end Content 3-->
              
            </td>
          </tr>
          <tr>
            <td width="100%">
              <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr height="10">
                  <td width="4" bgcolor="#d9dfe2">
                    <table width="4" cellpadding="0" cellspacing="0" border="0">
                      <tr height="4">
                        <td width="4" bgcolor="#d9dfe2"></td>
                      </tr>
                    </table>
                  </td>
                  <td width="100%" bgcolor="#ECF0F5"></td>
                  <td width="4" bgcolor="#d9dfe2">
                    <table width="4" cellpadding="0" cellspacing="0" border="0">
                      <tr height="4">
                        <td width="4" bgcolor="#d9dfe2"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td width="100%">
              
              <!--Content 4-->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" style="background:#fff;">
                <tr>
                  <td width="4"></td>
                  <td bgcolor="#fff" width="100%" valign="top">
                    <table width="100%" cellpadding="15" cellspacing="0" border="0" bgcolor="#fff">
                      <tr>
                        <td bgcolor="#fff" style="background:#fff;">
                          <table width="100" cellpadding="0" cellspacing="0" border="0" align="right" class="full_width">
                            <tr>
                              <td width="100%" class="text-center">
                                <!--image-->
                                <img src="http://demo1.webares.com.ua/mobileemail/img/icon_4.jpg" border="0" alt="" width="100" height="100" />
                              </td>
                            </tr>
                          </table>
                          <table width="20" cellpadding="0" cellspacing="0" border="0" align="right" class="hide">
                            <tr>
                              <td width="100%">
                                &nbsp;
                              </td>
                            </tr>
                          </table> 
                          <table cellpadding="0" cellspacing="0" border="0" class="full_width">
                            <tr>
                              <td width="100%" class="text-center" style="font-family: Arial, sans-serif;font-size:15px;line-height:20px;color:#555;">
                                <a href="#" style="font-family: Arial, sans-serif;font-size:18px;line-height:27px;color:#333;margin:0;font-weight:bold;text-decoration:none;">A meaningful and engaging title goes here</a>
                                <br />
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod vehicula nunc, at mattis libero faucibus ac.</span>
                                <br /><br />
                                <a href="#" class="button" style="color:#399A9B;font-family: Calibri,  Arial, sans-serif;font-size:18px;line-height:22px;">Find out more</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td width="4"></td>
                </tr>
                <tr height="4">
                  <td width="4">
                    <table width="4" cellpadding="0" cellspacing="0" border="0">
                      <tr height="1">
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                      </tr>
                      <tr height="1">
                        <td width="1" bgcolor="#d9dfe2"></td>
                        <td width="3" colspan="3" bgcolor="#acb4b8"></td>
                      </tr>
                      <tr height="1">
                        <td width="2" colspan="2" bgcolor="#d9dfe2"></td> 
                        <td width="2" colspan="2" bgcolor="#acb4b8"></td>
                      </tr>
                      <tr height="1">
                        <td width="3" colspan="3" bgcolor="#d9dfe2"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                      </tr>
                    </table>
                  </td>
                  <td width="100%" bgcolor="#ECF0F5"></td>
                  <td width="4">
                    <table width="4" cellpadding="0" cellspacing="0" border="0">
                      <tr height="1">
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#acb4b8"></td>
                      </tr>
                      <tr height="1">
                        <td width="3" colspan="3" bgcolor="#acb4b8"></td>
                        <td width="1" bgcolor="#d9dfe2"></td>
                      </tr>
                      <tr height="1">
                        <td width="2" colspan="2" bgcolor="#acb4b8"></td>
                        <td width="2" colspan="2" bgcolor="#d9dfe2"></td> 
                      </tr>
                      <tr height="1">
                        <td width="1" bgcolor="#acb4b8"></td>
                        <td width="3" colspan="3" bgcolor="#d9dfe2"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <!--end Content 4-->
              
            </td>
          </tr>          
          <tr>
            <td width="100%">
              <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr height="10">
                  <td width="4" bgcolor="#d9dfe2">
                    <table width="4" cellpadding="0" cellspacing="0" border="0">
                      <tr height="4">
                        <td width="4" bgcolor="#d9dfe2"></td>
                      </tr>
                    </table>
                  </td>
                  <td width="100%" bgcolor="#ECF0F5">
                    <!--Footer-->
                    <table width="100%" cellpadding="15" cellspacing="0" border="0" bgcolor="#fff">
                      <tr>
                        <td bgcolor="#fff" style="font-family: Arial, sans-serif;font-size:12px;line-height:17px;color:#555;background:#ECF0F5;">
                          Footer info,<br />
                          Company &copy; 2013 etc.<br /><br />
                          <a href="#" style="color:#399A9B;">Unsubscribe</a> | <a href="#" style="color:#399A9B;">Contact</a>
                        </td>
                      </tr>
                    </table>
                    <!--End Footer-->
                  </td>
                  <td width="4" bgcolor="#d9dfe2">
                    <table width="4" cellpadding="0" cellspacing="0" border="0">
                      <tr height="4">
                        <td width="4" bgcolor="#d9dfe2"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td width="100%" height="20"></td>
          </tr>

        </table>
        <!--end Content wrapper-->
      </td>
    </tr>
  </table>
</body>
</html>





';

mail("office@webares.com.ua", "test", $message, $headers);
?>