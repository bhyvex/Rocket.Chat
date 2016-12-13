/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import mainContent from '../pageobjects/main-content.page';
import sideNav from '../pageobjects/side-nav.page';

import {username, email, password} from '../test-data/user.js';
import {checkIfUserIsValid} from '../test-data/checks';

describe('emoji', ()=> {
	before(()=>{
		browser.pause(1000);
		checkIfUserIsValid(username, email, password);
		sideNav.getChannelFromList('general').waitForExist(5000);
		sideNav.openChannel('general');
	});


	describe('render', ()=> {
		before(()=> {
			mainContent.emojiBtn.click();
		});

		after(() => {
			mainContent.emojiSmile.click();
			mainContent.setTextToInput('');
		});

		it('should show the emoji picker menu', ()=> {
			mainContent.emojiPickerMainScreen.isVisible().should.be.true;
		});

		it('click the emoji picker people tab', ()=> {
			mainContent.emojiPickerPeopleIcon.click();
		});

		it('should show the emoji picker people tab', ()=> {
			mainContent.emojiPickerPeopleIcon.isVisible().should.be.true;
		});

		it('should show the emoji picker nature tab', ()=> {
			mainContent.emojiPickerNatureIcon.isVisible().should.be.true;
		});

		it('should show the emoji picker food tab', ()=> {
			mainContent.emojiPickerFoodIcon.isVisible().should.be.true;
		});

		it('should show the emoji picker activity tab', ()=> {
			mainContent.emojiPickerActivityIcon.isVisible().should.be.true;
		});

		it('should show the emoji picker travel tab', ()=> {
			mainContent.emojiPickerTravelIcon.isVisible().should.be.true;
		});

		it('should show the emoji picker objects tab', ()=> {
			mainContent.emojiPickerObjectsIcon.isVisible().should.be.true;
		});

		it('should show the emoji picker symbols tab', ()=> {
			mainContent.emojiPickerSymbolsIcon.isVisible().should.be.true;
		});

		it('should show the emoji picker flags tab', ()=> {
			mainContent.emojiPickerFlagsIcon.isVisible().should.be.true;
		});

		it('should show the emoji picker custom tab', ()=> {
			mainContent.emojiPickerCustomIcon.isVisible().should.be.true;
		});

		it('should show the emoji picker change tone button', ()=> {
			mainContent.emojiPickerChangeTone.isVisible().should.be.true;
		});

		it('should show the emoji picker search bar', ()=> {
			mainContent.emojiPickerFilter.isVisible().should.be.true;
		});
	});

	describe('usage', ()=> {
		describe('send emoji via screen', ()=> {
			before(()=> {
				browser.pause(300);
				mainContent.emojiBtn.click();
				mainContent.emojiPickerPeopleIcon.click();
			});

			it('select a grinning emoji', ()=> {
				mainContent.emojiGrinning.waitForVisible(5000);
				mainContent.emojiGrinning.click();
			});

			it('the value on the message input should be the same as the emoji clicked', ()=> {
				mainContent.messageInput.getValue().should.equal(':grinning:');
			});

			it('send the emoji', ()=> {
				mainContent.addTextToInput(' ');
				mainContent.sendBtn.click();
			});

			it('the value on the message should be the same as the emoji clicked', ()=> {
				mainContent.lastMessage.getText().should.equal('😀');
			});
		});
	});

	describe('send emoji via text', ()=> {
		it('adds emoji text to the message input', ()=> {
			mainContent.addTextToInput(':smile');
		});

		it('should show the emoji popup bar', ()=> {
			mainContent.messagePopUp.isVisible().should.be.true;
		});

		it('the emoji popup bar title should be emoji', ()=> {
			mainContent.messagePopUpTitle.getText().should.equal('Emoji');
		});

		it('should show the emoji popup bar items', ()=> {
			mainContent.messagePopUpItems.isVisible().should.be.true;
		});

		it('click the first emoji on the popup list', ()=> {
			mainContent.messagePopUpFirstItem.click();
		});

		it('the value on the message input should be the same as the emoji clicked', ()=> {
			mainContent.messageInput.getValue().should.equal(':smile:');
		});

		it('send the emoji', ()=> {
			mainContent.sendBtn.click();
		});

		it('the value on the message should be the same as the emoji clicked', ()=> {
			mainContent.lastMessage.getText().should.equal('😄');
		});
	});
});
