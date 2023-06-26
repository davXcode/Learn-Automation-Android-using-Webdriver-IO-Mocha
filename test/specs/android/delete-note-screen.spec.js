const EditNoteScreen = require("../../screenobjects/android/edit-note.screen");

describe("Delete note", () => {
  before(async () => {
    await EditNoteScreen.skipTutorial();
  });

  it("Delete a note & check the note in trash can", async () => {
    await EditNoteScreen.addAndSaveNote("P", "PL\nPCX\nNamex");

    await driver.back();

    const note = await EditNoteScreen.firstNote.getText();

    // click on the note
    await EditNoteScreen.firstNote.click();

    // click on more icon
    await EditNoteScreen.moreIcon.click();

    // click on Delete item
    await EditNoteScreen.deleteIcon.click();

    // accept alert
    await driver.acceptAlert();

    // click on nav icon
    await EditNoteScreen.navIcon.click();

    // click on trash can item
    await EditNoteScreen.trashCanItem.click();

    // assertions
    const trashCanItem = await EditNoteScreen.firstNote;

    await expect(trashCanItem).toHaveText(note);
  });
});
