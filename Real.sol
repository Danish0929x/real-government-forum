// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Real {
    //initial value
    uint public assetCount = 0;

    //creating nested mapping for storing the data
    mapping(string => mapping(uint256 => string)) public assets;

    constructor() public {
        addProperty("12345678900",0, "Land, size : 40 x 40 sqft near hebbal bridge");
        addProperty("12345678900",1, "Land, size : 30 x 40 sqft HSR Layout Bangalore");
        addProperty("12345678900",2, "Land, size : 40 x 40, Yelahanka");
        addProperty("12345678901",0, "Vehicle, KA 01 J 1235, Yelahanka");
        addProperty("12345678902",0, "Land, 600 acres, Chennai");
        addProperty("12345678903",0, "Land, 60x80, Mumbai");
        addProperty("12345678904",0, "Land, 40x60, Goa");
        addProperty("12345678904",1, "Vehicle, GA 02 M 0254, Palolem");
        addProperty("12345678904",2, "Gold, 24k");

    }
    
    //function to add the properties
    function addProperty(string memory _userName, uint _assetCount, string memory _details) public {
        assets[_userName][_assetCount] = _details;
    }

    //read the properties details
    function readProperty(string memory _userName, uint256 _assetCount) public view returns(string memory){
        return assets[_userName][_assetCount];
    }

    //delete the properties
    function deleteProperty(string memory _userName, uint256 _assetCount) public {
        delete assets[_userName][_assetCount];
    }

}
