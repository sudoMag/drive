
let isId = isSessionId(id);
if (!isId) {
	getScript('session');
	$('#user-options-window').html(`
			<div 
				id='menu-login-button' 
				class='options-menu-text-button'>
				<div class='button-text'>
					Entrar
				</div>
			</div>
			<div 
				id='menu-singin-button' 
				class='options-menu-text-button'>
				<div class='button-text'>
					Registrate
				</div>
			</div>
		`);
	$('#menu-login-button').click(() => {
		$('#user-options-container').css('display', 'none');
		session('login');
		$('#user-options-container').off('click');
		$('#menu-login-button').off('click');
	});
	$('#menu-singin-button').click(() => {
		$('#user-options-container').css('display', 'none');
		session('singin');
		$('#user-options-container').off('click');
		$('#menu-login-button').off('click');
	});
} else {

}