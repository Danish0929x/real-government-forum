// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Real {
    //initial value
    uint public assetCount = 0;

    //creating nested mapping for storing the data
    mapping(uint256 => mapping(uint256 => string)) public assets;

    constructor() public {
        addProperty(0,0, "Land 40 x 40, near hebbal bridge");
        addProperty(0,1, "Land 30 x 40, HSR Layout");
        addProperty(0,2, "Land 40 x 40, Yelahanka");
        addProperty(1,0, "Vehicle KA 01 J 1235, Yelahanka");
        addProperty(1,1, "Vehicle KA 01 J 1235, Yelahanka");


    }
    
    //function to add the properties
    function addProperty(uint _userId, uint _assetCount, string memory _name) public {
        assets[_userId][_assetCount] = _name;
    }

    //read the properties details
    function readProperty(uint256 _userId, uint256 _assetCount) public view returns(string memory){
        return assets[_userId][_assetCount];
    }

}
