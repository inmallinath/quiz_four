class Company < ActiveRecord::Base
  has_many :products, dependent: :destroy

  validates :name, presence: true,
                    uniqueness: { case_sensitive: false},
                    length: {minimum: 3, maximum: 255}
end
