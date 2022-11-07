function valid_datas( f ){
	
	if( f.name.value == '' ){
		jQuery('#form_status').html('<span class="wrong">Ad Soyad boş bırakılamaz!</span>');
		notice( f.name );
	}else if( f.email.value == '' ){
		jQuery('#form_status').html('<span class="wrong">E-posta boş bırakılamaz!</span>');
		notice( f.email );
	}else if( f.phone.value == '' ){
		jQuery('#form_status').html('<span class="wrong">Telegon boş bırakılamaz</span>');
		notice( f.phone );
	}else if( f.subject.value == '' ){
		jQuery('#form_status').html('<span class="wrong">Konu boş bırakılamaz!</span>');
		notice( f.subject );
	}else if( f.message.value == '' ){
		jQuery('#form_status').html('<span class="wrong">Mesaj boş bırakılamaz!</span>');
		notice( f.message );
	}else{
		 jQuery.ajax({
			url: 'php/form.php',
			type: 'post',
			data: jQuery('form#gsr-contact').serialize(),
			complete: function(data) {
				jQuery('#form_status').html(data.responseText);
				jQuery('#gsr-contact').find('input,textarea').attr({value:''});
				jQuery('#gsr-contact').css({opacity:1});
				jQuery('#gsr-contact').remove();
			}
		});
		jQuery('#form_status').html('<span class="loading">Sending your message...</span>');
		jQuery('#gsr-contact').animate({opacity:0.3});
		jQuery('#gsr-contact').find('input,textarea,button').css('border','none').attr({'disabled':''});
	}
	
	return false;
}

function notice( f ){
	jQuery('#gsr-contact').find('input,textarea').css('border','none');
	f.style.border = '1px solid red';
	f.focus();
}