require "rails_helper"

feature "visitor sees homepage widget" do
  scenario "sees widget" do

    visit root_path

    expect(page).to have_content "Sonic Sifter"
    expect(page).to have_content "Open-Minded Music for Open-Minded People"
    expect(page).to have_content "Current Time"

  end
end
