class CreatePlaces < ActiveRecord::Migration[5.0]
  def change
    create_table :places do |t|
      t.string :img_url
      t.string :lat
      t.string :lng
      t.string :created_by
      t.string :note

      t.timestamps
    end
  end
end
