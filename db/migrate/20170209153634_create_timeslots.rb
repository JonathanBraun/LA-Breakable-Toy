class CreateTimeslots < ActiveRecord::Migration[5.0]
  def change
    create_table :timeslots do |t|
      t.integer :begin_time, null: false
      t.integer :end_time, null: false

      t.timestamps
    end
  end
end
