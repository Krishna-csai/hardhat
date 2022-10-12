// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract SimpleStorage {
    // boolean, uint, int, address ,bytes, string
    // bool hasFavouriteNumber = true;
    // uint256 FavouriteNumber = 5;
    // string FavouriteNumberinText = "Five";
    // int256 Favouriteint = -5;
    // address myAddress = 0x1a17cd1e1b6f552bC771abbFf567eA13d3D2971D;
    // bytes32 FavouriteBytes = "cat";
    uint256 public FavouriteNumber; //initial value is 0

    struct People {
        uint256 FavouriteNumber;
        string name;
    }

    mapping(string => uint256) public nameToFaviouriteNumber;

    function store(uint256 _FavouriteNumber) public {
        FavouriteNumber = _FavouriteNumber;
    }

    People[] public people;

    function retreive() public view returns (uint256) {
        return FavouriteNumber;
    }

    function addPerson(string memory _name, uint256 _FavouriteNumber) public {
        People memory newPerson = People({
            FavouriteNumber: _FavouriteNumber,
            name: _name
        });
        people.push(newPerson);
        nameToFaviouriteNumber[_name] = _FavouriteNumber;
        // people.push(People(_FavouriteNumber, _name));  another way to add data into the structure.
    }
}
