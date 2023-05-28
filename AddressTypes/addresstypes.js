class  AddressType{
    constructor(AddressTypeID,AddressTypeName,Active,CreatedBy,ModifiedBy,ModifiedDate){
      this.AddressTypeID = AddressTypeID;
      this.AddressTypeName = AddressTypeName;
      this.Active = Active;
      this.CreatedBy = CreatedBy;
      this.ModifiedBy = ModifiedBy;
      this.ModifiedDate = ModifiedDate;
    }
  }

  module.exports = AddressType;